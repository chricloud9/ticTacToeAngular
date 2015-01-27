# Intro To MVC / Intro to Angular

## Learning Objective(s)
- Students will know & understand what MVC means and why it's used in common frameworks
- Students will know & understand what Angular.js is, and what it's benefits are
- Students will have a beginning understanding of how to get started with Angular.js

## Essential Question(s)
- What does MVC mean and how does that apply to a lot of commonly used web frameworks?
- What's a framework?
- What are the benefits of using Angular.js?

## Talking Points/Road Map


#### What is MVC?

Let's start out the class with you guys doing a little bit of research. You and the person sitting next to you, research:
- What does MVC stand for? 
- What does it mean?
- Why on earth should we care?

- - -

**MVC** stands for **Model**, **View**, **Controller**, and it's a method of neatly organizing our code into separate, concise chunks.


The **Model** is our data. Everything relating to our data – attributes, behaviors, connecting to a database, calculations – goes in the model. They call it "business logic" because it's made to do all the hard work.

The **View** is our presentation – it's how we show a user what they need to see. Ideally, a view should do nothing more than that – there should be no "business logic" at all, it should simply be a representation of the data we need to see or the elements we need to interact with.

The **Controller** is the glue between them – it takes a user's input & hands off doing things to the model. It's really just there to send commands to the model.

We'll see these concepts in a ton of frameworks, and in our class in both Angular & Rails. They're loose ideas, and anyone who writes a library can use them or not, and in any way they like.

You'll see as you start writing more advanced code that it takes work to keep these things seperate and owned by their respective pieces. That work is worth it down the road, when your code is concise & easy to understand.

- - -

#### What is Angular?

Angular.js is a Javascript front-end framework. Angular's awesome because it does a lot of work for us behind the scenes, especially in regards to making sure our presentation is always up-to-date. 

Angular isn't _strictly_ MVC, which is to say that similarly to HTML, CSS, and vanilla Javascript, you can be as disorganized as you like. But our goal is to learn how MVC works as well as Angular, so we're gonna organize our code this way and keep it nice & clean.

##### Models in Angular

Angular's models are, for the most part, Javascript objects. We'll see in depth later how $scope works, but $scope is one of the pieces of glue our controllers give us to share information between it & the view. So a model in Angular might look like this:


```javascript
$scope.shop =  {
	opens: 9,
	closes: 11,
	bagels: ['Rye', 'Sourdough', 'Plain', 'Everything'],
	isOpen: function(){
		var now = new Date().getHours();
		if(now >= this.opens){
			return true;
		}else{
			return false;
		}
	}
}
}
```

##### Views in Angular

Angular lets us define views using regular HTML, and it can interpret expressions using double curly brackets.

```html
<p>{{shop.opens}}am</p>
```

##### Controllers in Angular

Controllers are the magic glue in Angular, and tie the view & the models together. When a user asks for something, the controller takes it and asks the model. When a user needs to change a model, it's the controller's job to tell the model what it needs to change.

We define controllers in modern Angular using a special Javascript method that Angular gives us:

```javascript
app.controller("DonutController",['$scope',function($scope){
	
	$scope.shop = {}

	$scope.addDonut = function(index) {}
	$scope.removeDonut = function(index) {}

});
```

When the user interacts with the view, the controller takes the reigns and is the one that talks to the model. Sometimes that's explicit (meaning we have to code a function), and sometimes we can rely on a few magic methods Angular gives us to do that for us without having to write any code.