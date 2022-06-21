import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCollapseMenu]'
})
export class CollapseMenuDirective {

  constructor(Element: ElementRef) {}
  @HostListener('click', ['$event'])
  onClick(eventPanel: any): void{
   console.log('test');
    if(eventPanel.target.nextSibling.style.display=="block" || eventPanel.target.nextSibling.style.display==''){
      eventPanel.target.nextSibling.style.display='none';
     //eventPanel.target.querySelector(".menuButton").innerText='expand_more';
      eventPanel.target.classList.add("ds_expand");
      eventPanel.target.classList.remove("ds_collapse");
    }
   else{
     eventPanel.target.nextSibling.style.display='block';
     //eventPanel.target.querySelector(".menuButton").innerText='expand_less';
     eventPanel.target.classList.add("ds_collapse");
     eventPanel.target.classList.remove("ds_expand");
   }
    
 }
}
