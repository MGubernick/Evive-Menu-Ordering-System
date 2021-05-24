# TOKEN='' NAME='' SOLD='false' PRICE=## MSR='' CAT='' IMG='' DES='' sh curl-scripts/items/create.sh

curl 'http://localhost:4741/breakfast' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "order": "'"${ORD}"'"
  }'

echo
