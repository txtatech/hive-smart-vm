#!/bin/bash

# Start
python3 chunk_it.py

# Wait
wait

# Start
python3 insert_os_fs.py

# Wait
wait

# Start
node aes_encrypt_json.js

# Wait
wait

# Start
node populate_toad.js

# Wait
wait
