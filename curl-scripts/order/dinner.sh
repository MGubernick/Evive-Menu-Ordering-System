# ORD='1,2,3,4' sh curl-scripts/order/dinner.sh
# // Steak,Potatoes,Wine,Water,Cake

curl 'http://localhost:4741/dinner' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "lunch": "'"${ORD}"'"
  }'

echo
