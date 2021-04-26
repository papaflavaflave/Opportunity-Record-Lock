#!/bin/sh
# Creates a new scratch org with dummy data and dependencies installed


set -e

#scratchAlias=${1-default}

echo "Set Alias for scratch org..."
read alias

echo "Creating the scratch org... \n"
sh ./scripts/create_scratch.sh $alias

#echo "Updating organization time zone... \n"
#sfdx force:data:record:update -s Organization -w "Name=Kicksaw" -v "TimeZoneSidKey=America/Chicago"

# echo "Deleting Sample Data... \n"
# sfdx force:apex:execute -f scripts/apex/delete_sample_data

echo "Opening new org...\n"
sfdx force:org:open 

# echo "Installing Dependent Metadata not in main.. ie installed packages and such  \n"
# sfdx force:source:deploy -p initial -w 25

echo "Pushing source...\n"
sfdx force:source:push 

#echo "Assign Admin Permission set..."
#sfdx force:user:permset:assign -n AdminPermSet

osascript -e 'display notification "Build is complete" with title "Build Status" sound name "Glass"'