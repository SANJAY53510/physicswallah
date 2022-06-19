


// Convert the file size to a readable format
const formatFileSize = function (bytes) {
    const sufixes = ['B', 'kB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};




document.getElementById("folder").addEventListener("change", function(event) {
    var output = document.querySelector("table");
    var files = event.target.files;
  
    for (var i=0; i<files.length; i++) {
      var item = document.createElement("tr");
      
      var name = document.createElement("td");
      var size = document.createElement("td");
      name.innerHTML = files[i].webkitRelativePath;
      size.innerHTML = formatFileSize(files[i].size);
      
     item.appendChild(name);
      item.appendChild(size);
      output.appendChild(item);
    };
  }, false);