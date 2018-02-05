cd packages/action-button
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../animate
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../base
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../button
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../card
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../checkbox
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../dialog
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../drawer
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../dropdown
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../elevation
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../font
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../footer
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../form-field
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../grid
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../icon
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../input
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../label
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../layout
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../list
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../menu
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../modal
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../progress
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../radio
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../select
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../sidebar
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../slide
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../slider
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../spacing
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../switch
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../tabs
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../text
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../theme
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../titlebar
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../toast
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../toolbar
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish

cd ../tooltip
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish


cd ../../
sed -i "3s/.*/    \"version\": \"$1\",/" package.json
npm publish
