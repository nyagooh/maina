#!/bin/bash

# Ann Maina Portfolio - Run Script
# Simple script to manage the portfolio application

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Display menu
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Ann Maina Portfolio - Run Script    ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}Select an option:${NC}"
echo ""
echo "  1) Start Development Server"
echo "  2) Build for Production"
echo "  3) Start Production Server"
echo "  4) Install Dependencies"
echo "  5) Run Linter"
echo "  6) Clean Build Cache"
echo "  7) Exit"
echo ""
echo -n "Enter your choice [1-7]: "
read choice

case $choice in
    1)
        echo -e "\n${GREEN}Starting development server...${NC}"
        npm run dev
        ;;
    2)
        echo -e "\n${GREEN}Building for production...${NC}"
        npm run build
        ;;
    3)
        echo -e "\n${GREEN}Starting production server...${NC}"
        echo -e "${YELLOW}Make sure you've built the project first (option 2)${NC}"
        npm start
        ;;
    4)
        echo -e "\n${GREEN}Installing dependencies...${NC}"
        npm install
        ;;
    5)
        echo -e "\n${GREEN}Running linter...${NC}"
        npm run lint
        ;;
    6)
        echo -e "\n${GREEN}Cleaning build cache...${NC}"
        rm -rf .next
        rm -rf node_modules/.cache
        echo -e "${GREEN}Cache cleaned successfully!${NC}"
        ;;
    7)
        echo -e "\n${GREEN}Goodbye!${NC}"
        exit 0
        ;;
    *)
        echo -e "\n${YELLOW}Invalid option. Please run the script again.${NC}"
        exit 1
        ;;
esac
