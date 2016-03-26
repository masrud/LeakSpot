#!/bin/bash 
dir=$1

resultFile=`ls $dir/result*`
cat $resultFile | awk '/RefStale/{print $0}' > aa
cat $resultFile | awk '/AllocationStale/{print $0}' >> aa
mv aa RESULT

function generateTitle {
        name=$1
        dir=$2
        sitetype=$3
        sitetypeInResult=$4
        fignames=$5
        #number=`echo $name | awk -v c1=$1 '{gsub(/[A-Za-z]/,""); gsub(/staledatacdfRefStaleness/,""); print $1}'`
        echo "%%%%%%%%"
        number=`echo $name | awk -v c1=$3 '{gsub(/[A-Za-z]/,""); gsub(/c1/,""); print $1}'`
        echo "number"
        echo "$number"
        resultFile=`ls $dir/result*`
        strout=`cat RESULT | grep $sitetypeInResult | grep $number`
        #  strout=`cat $resultFile | grep $sitetypeInResult | grep $number`
        echo "STRRRRRRRRRR" "$strout"
        sh makecdfFigCC.sh $f $fignames "$strout"
}



function common {
	for f in $1
	do
	echo $f
	name=`echo $f | awk '{gsub(/\//,""); print $1}'`
		echo $name
	generateTitle $name $dir $2 $3 $4-$name
	done

	figfiles=`ls $4*.pdf`
	pdftk  $4*pdf output $5.pdf
	rm $4*pdf -f
	mv $5.pdf $dir
}

function makeAllFigsPDFRef {
	pdffiles=`ls $1/staledatapdfRefStaleness*`
	common "$pdffiles" staledatapdfRefStaleness  RefStale pdffig  finishedPDFRef
}

function makeAllFigsPDFAllocation {
    pdffiles=`ls $1/staledatapdfAllocationStaleness*`
    common "$pdffiles" staledatapdfAllocationStaleness AllocationStale pdffig finishedPDFAlloc
}

function makeAllFigsAllocation {
    cdffiles=`ls $1/staledatacdfAllocationStaleness*`
    common "$cdffiles" staledatacdfAllocationStaleness  AllocationStale  cdffig  finishedCDFAlloc
}

function makeAllFigsRef {
    cdffiles=`ls $1/staledatacdfRefStaleness*`
    common "$cdffiles" staledatacdfRefStaleness RefStale cdffig finishedCDFRef
}

makeAllFigsAllocation $dir
makeAllFigsRef  $dir
makeAllFigsPDFAllocation $dir
makeAllFigsPDFRef $dir

