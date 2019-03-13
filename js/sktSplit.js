/* 
   --------------------------------------------------------
                           Split section
   --------------------------------------------------------     
*/
class sktSplit {   

    //------ Split constructor ------//
    constructor(){
        this.mainSplit = null;
        this.warea = null;
        this.rightSide = null;
        
        //------ Main sections ------//
        this.mainSplit = Split(['#idWarea', '#rightSide'], {
            gutterSize: 6,
            cursor: 'col-resize',
            minSize: [0, 200],
            sizes: [80, 20]
        });

        //------ Live split section ------//
        // this.warea = Split(['#idWarea'], {
        //     direction: 'vertical',
        //     cursor: 'row-resize',
        //     gutterSize: 6,
        //     minSize: [0],
        //     sizes: [80]
        // });

        // //------ Project split section ------//
        // this.rightSide = Split(['#rightSide'], {
        //     direction: 'vertical',
        //     cursor: 'row-resize',
        //     gutterSize: 6,
        //     minSize: [0],
        //     sizes: [20]
        // });
    }

    //------ Project section collapse click event ------//
    projectSplitCollapse(){
       
    }

    //------ Live code section collapse click event ------//
    liveSplitCollapse(){
             
    }

}