# TOKEN='' NAME='' SOLD='false' PRICE=## MSR='' CAT='' IMG='' DES='' sh curl-scripts/items/create.sh

curl 'http://localhost:4741/breakfast' \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  # --header "Content-Type: text/html" \

echo
