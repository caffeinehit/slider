all:
	coffee -o lib -c src

watch:
	coffee -w -o lib/ -c src/ 
