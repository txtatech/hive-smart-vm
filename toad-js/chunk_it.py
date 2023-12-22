import sys
import os
import gzip
import base64
import json

# Ensure the output directories exist
os.makedirs('outputs/chunks', exist_ok=True)

# Construct the path to the directory where ai_dna_main.py resides.
script_dir = os.path.dirname(os.path.realpath(__file__))  # Gets the directory where the companion script is running.
parent_dir = os.path.abspath(os.path.join(script_dir, os.pardir))  # Gets the parent directory.
sys.path.append(parent_dir)  # Adds it to sys.path

class FileProcessor:
    def __init__(self, input_directory='inputs', output_directory='outputs'):
        self.input_directory = input_directory
        self.output_directory = output_directory
        os.makedirs(self.output_directory, exist_ok=True)

    def compress_and_generate_base64_chunks(self, file_name, chunk_size=1500, output_file_name=None):
        file_path = os.path.join(self.input_directory, file_name)
        
        # Read the file in binary mode
        with open(file_path, 'rb') as f:
            data = f.read()

        # Compress the data using GZIP
        compressed_data = gzip.compress(data)

        # Encode the compressed data to base64
        encoded_data_base64 = base64.urlsafe_b64encode(compressed_data).decode("utf-8")

        print(f"Total size of base64 data before splitting: {len(encoded_data_base64)}")

        # Split the base64 data into chunks
        chunks = [encoded_data_base64[i:i+chunk_size] for i in range(0, len(encoded_data_base64), chunk_size)]

        # Determine the output file name
        base_file_name = os.path.basename(file_name)  # Extracting only the base name of the file
        final_output_file_name = output_file_name if output_file_name else f'{base_file_name}-ai-dna.json'
        
        # Write chunks to a JSON file in the 'outputs/chunks' directory
        json_file_path = os.path.join(self.output_directory, final_output_file_name)
        with open(json_file_path, 'w') as json_file:
            json.dump({"chunks": chunks}, json_file)  # Save the chunks as an array within a JSON object

        print(f"Chunks have been saved to {json_file_path}")

def process_multiple_files(file_list, input_directory='', output_directory='outputs/chunks'):
    # Initialize FileProcessor
    processor = FileProcessor(input_directory=input_directory, output_directory=output_directory)
    
    # Loop through each file in the list and process it
    for file_name in file_list:
        print(f"Processing {file_name}...")
        output_file_name = f"{os.path.splitext(os.path.basename(file_name))[0]}_chunks.json"  # Generate output file name based on input
        processor.compress_and_generate_base64_chunks(file_name, output_file_name=output_file_name)
        print(f"Finished processing {file_name}.")

if __name__ == "__main__":
    # List of files you want to process
    files_to_process = ['inputs/test.js']
    
    # Call the function to process multiple files
    process_multiple_files(files_to_process)
