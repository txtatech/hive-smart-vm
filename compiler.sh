#!/bin/bash

# compiler.sh
# Replaces compiler.bat for Linux environments

# Clear the screen
clear

# Set terminal color to green
echo -e "\e[32m"

# Uncomment the following lines if bundling is required in the future
# echo "Bundling files..."
# java -jar compiler.jar --compilation_level BUNDLE --js libv86.js nodejs.js --js_output_file NodeVM.js --warning_level QUIET

# Minifying package
echo "Minifying package..."
java -jar compiler.jar --compilation_level SIMPLE --js hive_smart_vm.js --js_output_file HiveSmartVM.js --warning_level QUIET

# Uncomment the following lines if you want to start NodeVM.js after compilation
# echo "Starting..."
# node NodeVM.js

# Reset terminal color
echo -e "\e[0m"

echo "Done!"
