echo "prisma deploy command "
cd database/
prisma deploy
# echo "get-schema command"
# yarn run get-schema
echo "starting command"
yarn run dev 