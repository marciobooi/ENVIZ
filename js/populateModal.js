function populateModal(tool) {

    const toolId = tool.tool;  

    switch (toolId) {
        case "ENPRICES":     
            buildEmprices (toolId)
            break;
        case "ENSANKEY":     
            buildSankey (toolId)
            break;
        case "ENMONTHLY":     
            buildEnmonthly (toolId)
            break;
        case "ENTRADE":     
            buildEntrade (toolId)
            break;
        case "ENBAL":     
            buildEnbal (toolId)
            break;
        case "ENDASH":     
            buildEndash (toolId)
            break;
    
        default:
            break;
    }

    

    const modalElement = document.getElementById('modal-example');
    modalElement.showModal();
    $('.goto').attr('onclick', toolId+'Url()');
}


