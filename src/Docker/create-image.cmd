docker build --no-cache -f SQL\Dockerfile.PostgreSql -t shoptest/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t shoptest/app ../..
