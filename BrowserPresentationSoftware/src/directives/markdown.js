import Vue from 'vue';
import VueKatex from 'vue-katex'
import 'katex/dist/katex.min.css';

Vue.use(VueKatex)
//Remember rules are implemented from top to bottom.
//Thus rules should be desc. Otherwise it won't work

const rules = [
    //Quoteblock
    [/>{1}\s?([^\n]+)\n/g,'<blockquote class="blockquote">$1</blockquote>'],//It is at the top because otherwise it picks up the html and changes the > to a blockquote

    
    //Region code
    [/`{3}\s?([^\n]+)`{3}/g,'<pre class="language-javascript code"><code>$1</code></pre>'],
    //End region code

    //region headers
    [/#{6}\s?([^\n]+)\n/g,'<h6 class="header6">$1</h6>'],
    [/#{5}\s?([^\n]+)\n/g,'<h5 class="header5">$1</h5>'],
    [/#{4}\s?([^\n]+)\n/g,'<h4 class="header4">$1</h4>'],
    [/#{3}\s?([^\n]+)\n/g,'<h3 class="header3">$1</h3>'],
    [/#{2}\s?([^\n]+)\n/g,'<h2 class="header2">$1</h2>'],
    [/#{1}\s?([^\n]+)\n/g,'<h1 class="header1">$1</h1>'],
    //end region headers

    
    //Horizontal Line region
    [/\*{3}\n/g,'<hr class="horizontalLine">'],
    [/-{3}\n/g,'<hr class="horizontalLine">'],
    [/_{3}\n/g,'<hr class="horizontalLine">'],
    //End horizontal line region
    
    //bruh IDK we need to figure it out region
    [/([^\n]+)\n\s+=+/g, '<h1>$1</h1><hr/>'], 
    [/([^\n]+)\n\s+-+/g, '<h2>$1</h2><hr/>'], 
    //end IDK region

    //Lists. Only works from line onwards. This is because the regex checks for a newline char
    [/((\n\d\..+)+)/g,'<ol class="list orderedList">$1</ol>'],
    [/((\n\*.+)+)/g,'<ul class="list unorderedList">$1</ul>'],
    [/\n\d\.([^\n]+)/g, '<li class="list orderedItem">$1</li>'],
    [/\n\*([^\n]+)/g, '<li class="list unorderedItem">$1</li>'],
    //End list region

    [/\*\*([^*]+)\*\*/g,'<b class="bold">$1</b>'], //Bold
    [/__([^_]+)__/g, '<b class="bold">$1</b>'], //Bold
    [/\*([^*]+)\*/g,'<i class="itallics">$1</i>'], //itallics
    [/_([^_]+)_/g,'<i class="itallics">$1</i>'], //itallics
    [/~~([^_]+)~~/g,'<strike class="strike">$1</strike>'], //strikethrough
    
    [/!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g,'<img src="$2" alt="$1" title="$3" class="image"/>'],//Images - format ![alternative link](source "caption")
    [/!\[([^\]]+)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="image"/>'],//Images - format ![alternative link](source)
        
    //[/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="hyperlink">$1</a>'],//Links - format [Text](link)
    [/\[([^\]]+)\]\(([^)]+)\)/g, '<iframe src="$2" class="iframe">$1</iframe>'],//Links - format [Text](link)
    
    [/([^\n]+\n)/g,'<p class="paragraph">$1</p>'],//New line will create new paragraph

    //Region Stuff to do - once it is done move it and add it's class

    //#Need to make entire page full
    [/~\[([^\]]+)\]/g,'<iframe src="$1" style="">Your browser doesn\'t support iframes</iframe>'],//Iframe - format ~[link]

    //#Make Iframe with CSS to scale as ~[link][css]
    //#Math
    [/\$\$([^*]+)\$\$/g,'<span v-html="<b>$1</b>"></span>'], //Bold

    //#Code
    //#Escape characters
    //End region
];

export default {

    bind(el){
        let html = el.textContent;
        rules.forEach(([rule, template]) => {
            html = html.replace(rule, template);
        })
        el.innerHTML = html;
    }   
}