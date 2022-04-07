
var $filesNavBts = $("#file-nav button");
var currentFilesButton;
var leftSideStructure = $('.structure-left');
var rightSideStructure = $('.structure-right');

gsap.set(leftSideStructure,{display:"none"});
gsap.set(rightSideStructure,{display:"none"});
gsap.set(leftSideStructure[0],{display:"block"});
    gsap.set(rightSideStructure[0],{display:"block"});



$("#file-nav button").on("click",function(){
    // remove the selected class
    $("#file-nav button").removeClass("selected-file");

    currentFilesButton = $filesNavBts[$("#file-nav button").index(this)];

    console.log(currentFilesButton);

    // add the selected class to the button that was pressed
    $(currentFilesButton).addClass("selected-file");

    // hide all left and right side structures
    gsap.set(leftSideStructure,{display:"none"});
    gsap.set(rightSideStructure,{display:"none"});

    // show the left and right side structures that were selected
    gsap.set(leftSideStructure[$("#file-nav button").index(this)],{display:"block"});
    gsap.set(rightSideStructure[$("#file-nav button").index(this)],{display:"block"});



})