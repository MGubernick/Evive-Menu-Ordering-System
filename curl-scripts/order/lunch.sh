# ORD='1,2,3' sh curl-scripts/order/lunch.sh
# // return Sandwich,Chips,Soda

curl 'http://localhost:4741/lunch' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "lunch": "'"${ORD}"'"
  }'

echo
