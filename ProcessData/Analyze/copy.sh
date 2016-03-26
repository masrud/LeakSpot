    dir=$1
    mkdir $dir

    mv staledatapdfAllocationStaleness*   $dir
    mv staledatacdfAllocationStaleness*   $dir
    mv staledatacdfReferenceStaleness*   $dir
    mv staledatapdfSetNullStaleness*   $dir
    mv dataTimeCountAllocationTimeCount*  $dir

    mv staledatacdfRefStaleness* $dir
    mv staledatapdfRefStaleness* $dir
    mv dataTimeCountRefTimeCoun* $dir
    mv staledatacdfSetNullStaleness* $dir
    mv dataTimeCountSetNull* $dir
    mv graph* $dir
    mv result* $dir
