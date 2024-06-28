let url0 = "https://search.grs.gov.hk/en/search.xhtml?q=%22industry%22&pq=%22paper%22&rpp=50&page=1&f_lv=file" // CHANGE THIS LINK
let table = "|Title|Link|Date|ID|\n"
table += "|---|---|---|---|\n"

jQuery.ajax({ // get all pages
    url: url0,
    success: function(data) {
        let d = new DOMParser().parseFromString(data, "text/html").querySelector('.sr_ps_total').innerText.replace("of ", "");
        let p = Number(d);
        console.log(p)
        for (i=1; i<p+1; i++) { // (i=1; i<p+1; i++) {
            let l = url0.replace("page=1",`page=${i}`)
            jQuery.ajax({
                url: l,
                success: function(data) {
                    let r = new DOMParser().parseFromString(data, "text/html").querySelectorAll('[data-id]');       
                    for (x of r) {
                        // console.log(x);
                        let t = x.querySelector(".title").innerText || "no title";
                        let url = x.querySelector("a").href || "no url";
                        //let id = document.evaluate("//span[contains(., 'ID')]/following-sibling::span", x) // || "no id";  
                        let id = (Array.prototype.filter.call(x.querySelectorAll(".param"), function(el){return RegExp("ID").test(el.textContent)})[0]) === undefined ? "no id" : (Array.prototype.filter.call(x.querySelectorAll(".param"), function(el){return RegExp("ID").test(el.textContent)})[0]).innerText;
                        let d = (Array.prototype.filter.call(x.querySelectorAll(".param"), function(el){return RegExp("Date").test(el.textContent)})[0]) === undefined ? "no date" : (Array.prototype.filter.call(x.querySelectorAll(".param"), function(el){return RegExp("Date").test(el.textContent)})[0].innerText); 
                        let O = {}
                        O.Title = t.trim();
                        O.Link = url.trim();
                        O.ID = id.trim().replaceAll(/\n|\t|\r|\s|Record ID:\s/g, "");
                        O.Date = d.trim().replaceAll(/\n|\t|\r|\s|Covering Date:/g, "");
                        table += `|${O.Title}|${O.Link}|${O.Date}|${O.ID}|\n`
                        // console.log(i)
                        if (i===p+1) {console.log("done")}
                    }
                }    
            })
        }
    }
})