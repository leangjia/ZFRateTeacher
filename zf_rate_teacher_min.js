function(){var e,f,g,h,i,j,a=document.getElementById("iframeautoheight"),b=a.contentDocument||a.contentWindow.document,c=b.getElementsByTagName("select"),d=[];for(e=0;e<c.length;e++)c[e].id.indexOf("DataGrid1__")>-1&&d.push(c[e]);for(e=0;e<d.length;e++)for(f=d[e].options,g=Math.floor(Math.random()*d.length),h=0;h<f.length;h++)i=f[h].value,e==g?"4(良好)"==i&&(f[h].selected=!0):"5(优秀)"==i&&(f[h].selected=!0);j=b.getElementById("Button1"),j.click()}