#!/bin/bash

mkdir mermaid-enhance
cd mermaid-enhance

# Node.js environment
npm init -y
npm install mermaid @ts-morph/ast

# Python environment
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn python-cytoscape openai
