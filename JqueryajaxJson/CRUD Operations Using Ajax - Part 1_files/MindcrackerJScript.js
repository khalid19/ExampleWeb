﻿function GetPrintVersion() {
    if (document.getElementById != null) {
        var e = "<HTML>\n<HEAD>\n";
        if (document.getElementsByTagName != null) {
            var t = document.getElementsByTagName("head");
            if (t.length > 0) e += t[0].innerHTML
        }
        e += '\n<script language = "javascript">';
        e += "\n function printWindow()\n{";
        e += " var printReadyEle = document.getElementById(\"printContent\");\nvar shtml = '<HTML>\\n<HEAD>\\n';\nif (document.getElementsByTagName != null)\n{\nvar sheadTags = document.getElementsByTagName(\"head\");\nif (sheadTags.length > 0)\nshtml += sheadTags[0].innerHTML;\n}\nshtml += '</HEAD>\\n<BODY>\\n';\nif (printReadyEle != null)\n{\n";
        e += "shtml += '<form name = frmform1>';\nshtml += printReadyEle.innerHTML;\n}\nshtml += '\\n</form>\\n</BODY>\\n</HTML>';\nvar printWin1 = window.open();\nprintWin1.document.open();\nwindow.parent.close();\nprintWin1.document.write(shtml);\nprintWin1.document.close();\nprintWin1.print();";
        e += "\n}\n</script>\n</HEAD>\n<BODY>\n";
        var n = document.getElementById("div1");
        var r = document.getElementById("div2");
        if (n != null) {
            e += "<form name = frmform>";
            e += '\n<div id = printContent>\n<table cellspacing = 0 cellpadding = 0 width = 100% class=grayBG>\n<tr>\n<td>&nbsp;&nbsp;Source : C# Corner (<a href = "http://www.c-sharpcorner.com" class = specific>www.c-sharpcorner.com</a>) <input type = button value = Print class = CommonTextBoxStyle  onclick = "printWindow();"> </td>\n</tr>\n</table>\n';
            e += "<TABLE cellSpacing=0 cellPadding=10 width=100% border=0>\n<TR>\n<TD class=tblArticleHeadingBG>\n";
            e += n.innerHTML;
            e += "\n</td>\n</tr>\n</table>";
            e += "\n<table cellspacing = 0 cellpadding = 0 width = 100%>\n<tr class=grayBG>\n<td>&nbsp;</td>\n</td>\n</tr>\n</table>\n";
            if (r != null) {
                e += "<TABLE cellSpacing=0 cellPadding=10 width=100% border=0 class=ArticlePublisherBackgroundWhite align = center>\n<TR>\n<TD>\n";
                e += r.innerHTML;
                e += "\n</td>\n</tr>\n</table>\n\n";
                e += "\n<table cellspacing = 0 cellpadding = 0 width = 100%>\n<tr>\n<td class=grayBG>&nbsp;&nbsp;Thank you for using C# Corner</td>\n</tr>\n</table>\n"
            } else {
                alert("This article doesn't contains any content! Sorry for inconvenience");
                return
            }
        }
        else {
            alert("Could not find the header of the article");
            return
        }
        e += "\n</div>\n</form>\n</BODY>\n</HTML>";
        var i = window.open();
        i.document.open();
        i.document.write(e)
    } else {
        alert("The print ready feature is only available if you are using an browser. Please update your browswer.")
    }
}