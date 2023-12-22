import json

def create_and_update_json(chunks_file_path, output_file_path):
    # Revised JSON structure with only one 'dna_structure' key
    revised_json_structure = {
        'dna_structure': {
            'kernel': {
                'version': '1.0',
                'tasks': [],
                'communicationBus': {},
                'metadata': {}
            },
            'Genomes': {
                'OS': {'v86': {}, 'kernel': {}},
                'FileSystem': {
                    'TempFS': [],  # Use an empty list to store the placeholder
                    'UserFiles': {}
                },
                'WebFrontEnd': {'HTML': {}, 'CSS': {}, 'JavaScript': {}},
                'WebBackEnd': {'ServerScripts': {}, 'Database': {}},
                'Desktop': {'UI': {}, 'Applications': {}}
            },
            'TemporaryStrands': []  # Create an array for temporary strands
        }
    }

    # Read the chunks data from outputs_chunks.json
    with open(chunks_file_path, 'r') as f:
        chunks_data = json.load(f)

    # Concatenate all base64-encoded chunks
    if 'chunks' in chunks_data and isinstance(chunks_data['chunks'], list):
        base64_string = ''.join(chunks_data['chunks'])
    else:
        print("Invalid or missing 'chunks' data in outputs_chunks.json")
        return

    # Update the 'TempFS' field in the revised JSON structure
    if 'Genomes' in revised_json_structure['dna_structure'] and 'FileSystem' in revised_json_structure['dna_structure']['Genomes']:
        revised_json_structure['dna_structure']['Genomes']['FileSystem']['TempFS'] = [base64_string]

    # Serialize and write the updated JSON structure to the output file
    with open(output_file_path, 'w') as f:
        json.dump(revised_json_structure, f, indent=4)

# Paths to the relevant files
chunks_file_path = 'outputs/chunks/test_chunks.json'  # Replace with the path to your outputs_chunks.json
output_file_path = 'outputs/live_dna_data.json'  # Replace with the path where you want to save the updated JSON file

# Call the function to create and update the JSON file
create_and_update_json(chunks_file_path, output_file_path)
