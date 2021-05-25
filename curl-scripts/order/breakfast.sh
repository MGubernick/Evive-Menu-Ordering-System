# ORD='1,2,3' sh curl-scripts/order/breakfast.sh
# // return: Eggs,Toast,Coffee

curl 'http://localhost:4741/breakfast' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "breakfast": "'"${ORD}"'"
  }'

echo
