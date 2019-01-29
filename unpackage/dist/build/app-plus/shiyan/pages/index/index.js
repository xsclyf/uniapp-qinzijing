
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"content{padding:",[0,10],"}\n.",[1],"logo{height:",[0,200],";width:",[0,200],"}\n.",[1],"title{font-size:",[0,36],";color:#8f8f94}\n",],undefined,{path:"./pages/index/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/index/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      