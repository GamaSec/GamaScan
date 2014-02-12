CloudFlare.define("gamasec",
    ["gamasec/config", "cloudflare/jquery1.7"],
    function(config,$)
    {		
		function addBadge(logoside){
			var domainname=config.domain_id;
			var domainurl=config.domain_name;
			
			if(domainname == undefined)
			    {
			    domainurl=location.hostname;
			    }
			var embeddedCode ="<div id=\"gamasec_badge\" style=\"bottom:0;position:fixed;"+logoside+":0;\"><a href=\"https://www.gamasec.com/Seal.aspx?domain="+domainname+"&targeturl="+domainurl+"\" target=\"_blank\" onClick=\"javascript:void window.open('https://www.gamasec.com/Seal.aspx?domain="+domainname+"&targeturl="+domainurl+"','GamaScan','toolbar=0,resizable=0,width=532px,height=700px,location=0,menubar=0,scrollbars=0,status=0','');return false;\"> <img border=\"0\" src=\"https://www.gamasec.com/images/seals/wseal.png\" alt=\"GamaScan\" oncontextmenu=\"alert('Copyright 2014 Gamasec Ltd | All rights reserved.');return false;\"></a></div>";
			$("body").append(embeddedCode);
		}
		function lookForBadge(){
			if(config.seal_badge!="None")
			{
				if(!$("gamasec_badge")[0])
				{
					addBadge(config.seal_badge);
				}
			}
		}
		lookForBadge();
    }
)
