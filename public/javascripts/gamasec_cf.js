CloudFlare.define("gamasec",
    ["gamasec/config", "cloudflare/jquery1.7"],
    function(config,$)
    {		
		function addBadge(logoside){
			var protocol = window.location.protocol != "https:" ? "http:" : "https:";
			var embeddedCode ="<div id=\"gamasec_badge\" style=\"bottom:0;position:absolute;"+logoside+":0;\"><a href=\""+protocol+"://www.gamasec.com/Seal.aspx?domain="+config.domain_name+"\" target=\"_blank\" onclick=\"javascript:void window.open('"+protocol+"://www.gamasec.com/Seal.aspx?domain="+config.domain_name+"','GamaScan','toolbar=0,resizable=0,width=532px,height=700px,location=0,menubar=0,scrollbars=0,status=0','');return false;\"> <table border=\"0\" width=\"121\" cellspacing=\"0\" cellpadding=\"0\"><tr><td><img height=\"53\" src=\""+protocol+"://www.gamasec.com/images/seals/tseal.png\" width=\"117\" border=\"0\"></td></tr><tr><td><p align=\"center\" alt=\"GamaScan\" oncontextmenu=\"alert('Copyright 2013 Gamasec Ltd | All rights reserved.');return false;\"><img border=\"0\" src=\""+protocol+"://www.gamasec.com/images/seals/DateBox.png\" width=\"118\" height=\"14\"></td></tr></table></a></div>";
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
