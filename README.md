app.component.html


<h1>View child decorator</h1> 
<input placeholder="Focus on page load" #focusElement/>
<br>
<input placeholder="No focus"/>
<p #paragraphElement>Bini Babu</p>



We need to get the input element and focus on it dynamically. In javascript to get the HTML element we use document.getElementById('sample') to get the corresponding HTML element, but in angular we cannot use document.getElementById('sample') instead we use @Viewchild.
In input (in app.component.html) we pass ViewChild id as #focusElement  (<input placeholder="Focus on page load" #focusElement/> )



app.component.ts

export class AppComponent implements AfterViewInit {
  @ViewChild('focusElement') element!: ElementRef;
  @ViewChild('paragraphElement') paraElement!: ElementRef;
  ngAfterViewInit(): void {
    this.element.nativeElement.focus();  // focusElement input in HTML element will be focussed
    this.paraElement.nativeElement.style.color = 'red';
  }
}


focusElement is the id for @viewChild and the focusElement comes from HTML in the input tag ( that is  <input placeholder="Focus on page load" #focusElement/> ).   'element' is the variable name. ngAfterViewInit is used when the view is completely initialized and we can use to access HTML elements using viewchild in ngAfterViewInit.
this.paraElement.nativeElement.style.color = 'red'; // This statement will give style color red for p element in HTML where the template referral is 'paragraphElement' . (that is <p #paragraphElement>Bini Babu</p> in app.component.html).
@ViewChild is used to access HTML elements in the html file component to ts file component. ElementRef is the type of element given for the variable ( example : - that is   @ViewChild('focusElement') element!: ElementRef; in this element is the variable of type ElemenRef).
The variable can be used to access the style, class, classlist.



