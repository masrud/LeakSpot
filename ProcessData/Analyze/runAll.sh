function runprocstaleness {
	echo "-----------"
	node procStaleness.js  $1/HEAP.heapsnapshot $1/webAppData $2 true 0 
}

function runprocStaleness {
	name=$1
	echo "*******"
	runprocstaleness ../../Data/BenchmarkRepeat13Times/$1 $1 > result$1
	mkdir Graph/$1
	sh copy.sh Graph/$1
}

for f in    pdf Box2D Crypto  deltablue  earley  gbemu  Navier  raytrace  regexp  Richards  Splay  CodeLoad10TimesEval 
do
	echo $f
runprocStaleness $f
done

