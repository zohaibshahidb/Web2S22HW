// hide all file structures
gsap.set(".files-and-folders",{display:"none"});
var structureTitles = ["Assets", "Deploy", "Design","Dev"];
var $filesAndFolders = $(".files-and-folders");
var $structureBtns = $("#folder-btns button");
var $structureIcons = $("#folder-btns button i");
var currentBtn;
var currentIcon;


$('#folder-btns button').on("click",function(){
    console.log("clicked");
    // hide all file structures
    gsap.set(".files-and-folders",{display:"none"});
    // remove any selected button state
    $("#folder-btns button").removeClass("selected-btn");

    // show the file and folders that were selected
    gsap.set($filesAndFolders[$("#folder-btns button").index(this)],{display:"block"});

    // set the current button and the current icon
    currentBtn = $structureBtns[$("#folder-btns button").index(this)];
    currentIcon = $structureIcons[$("#folder-btns button").index(this)];

    // add the selected class
    $(currentBtn).addClass("selected-btn");

    // remove any open folder
    $($structureIcons).removeClass("fa-folder-open");
    // add in the closed folder to all buttons
    $($structureIcons).addClass("fa-folder");
    // add the open folder icon to the selected button
    $(currentIcon).addClass("fa-folder-open");

    // set the title
    $("#structure-title").html(structureTitles[$("#folder-btns button").index(this)]);

});