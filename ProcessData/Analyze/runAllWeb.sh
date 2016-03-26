function runprocstaleness {
   echo $1
      node procStaleness.js  $1/HEAP.heapsnapshot $1/webAppData $2 true $3
}

function runprocStaleness {
	name=$1
	afterwarmup=$2
	echo "************" $name
	#  echo ../../Data/WebApps/$name 
	#  runprocstaleness  ../../Data/WebApps/$name $name $afterwarmup  > result$name
	runprocstaleness ../../Data/OpenSourceWebApps/$name  $name $afterwarmup > result$name
	echo "---------" $name
	mkdir GraphWeb/$name-$afterwarmup
	sh copy.sh GraphWeb/$name-$afterwarmup
}

#The last parameter determine the position that warmup starts then

#runprocStaleness  Calendar13Times  5
#runprocStaleness  Gmail            0
#runprocStaleness  FaceBook11       1
#runprocStaleness  Gmail13Times     6
#runprocStaleness  YahooMail13Times  2
#runprocStaleness  YahooMail13Times  3
#runprocStaleness  FaceBook11  5
#runprocStaleness  FaceBook11  7

for f in DojoLeaky DojoNoLeak YUIAfterFixingFirstLeak YUI-Leaky  YUILeakyAgain YUINewLeakFixed  YUINewLeaky  YUIRealFixOnisCommented  YUIRealFixOnisNotCommented   
do
    #echo $f
    runprocStaleness $f  0
done

#runprocStaleness DojoLeaky                              0
#runprocStaleness DojoNoLeak                             0
#runprocStaleness YUIAfterFixingFirstLeak                0
#runprocStaleness YUI-Leaky                              0 
#runprocStaleness YUILeakyAgain                          0
#runprocStaleness YUINewLeakFixed                        0
#runprocStaleness YUINewLeaky                            0
#runprocStaleness YUIRealFixOnisCommented                0
#runprocStaleness YUIRealFixOnisNotCommented             0
