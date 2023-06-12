# FundIT

##Introduction:
Let's imagine for a second that you are an inventor and you come up with some brand new product that you want to create. However, developing a product costs money,
right? It costs money. You need money for employees, materials, manufacturing etc.The idea of Kickstarter(https://www.kickstarter.com/) is to help you raise that money 
to build some initial prototype of your project.So you come to Kickstarter as a product owner and you create a campaign and you discuss about what you want to build.
then you ask random people on the internet for some money. So people donate money to your campaign.And in exchange, at some point in the future, you will give that 
person some reward.The the thing about Kickstarter is that the campaign creator only gets money if they meet some minimum funding goal. Once the campaign succeeds, 
Kickstarter takes all this donated money and sends it directly to the person who created this campaign, and it's then up to that campaign creator to go ahead and take 
that money, build the product, and then send that product to all the people who have donated to the campaign.

So, that sounds like a great system, right?

Some people need money to build their product. Maybe they can't raise or get financing for building that product.So they come to Kickstarter instead.Do a little bit of 
marketing and then walk away with the money they need to build their project

So where do things go wrong?

##Problem:
The problem is that some people who create campaigns are a little bit malicious. It's totally up to the campaign creator to take the money that they get donated and 
then actually spend it to further their project and spend it to actually get a product that can be sent to their donators.But what happens in reality is that many of 
these projects end up failing, so they'll end up meeting their funding goal. They get money, but then it turns out that they have no ability to 
actually efficiently create a product. And then eventually they run out of money and they have to turn back to all of these backers and say,Sorry, but we ran out of money 
and we can't give you your product.
So essentially all the backers lose their money completely getting nothing in return.On the other hand, are this people out there who are completely malicious and the
people who raise money for campaigns with absolutely no intent to to ever make use of that money to build a product.
Here is an article about the kickstarters scam:
https://www.parkablogs.com/content/kickstarter-scams-influencers

Clearly this is a very repetitive problem that happens quite a bit on the platform.

##Solution :
If we could somehow control this money being sent not to a private bank account, but instead to somevendor who is going to supply real project supplies that can be used 
to build some product.Then it seems to me like we might have a little bit more successful product or campaign on our hands.That's the exact goal of the contract here.
This contract is going to try to control where this idea person can send money to. Contributors to a campaign are no longer going to be sending money directly to some 
manager or idea person. Instead, these contributors are going to send money to an Ethereum contract. 
So in order for a manager to actually spend money, we're going to say that they have to create something called a spending request. A spending request is going to attempt 
to withdraw money from the contract and send it to some specific external address. And in this case, we're going to say that this external address is some vendor.
So maybe it's someone who's going to make a battery casing for us or an LCD display or some sensor clips, essentially someone who is going to help us further the 
campaign along and make sure that we actually are trying to build a product and not just run away with all of our money. We're going to say that all of the people who 
contributed to a campaign have to vote on every spending request. So manager says, hey, I need like $100,000 to buy some battery casings. They're going to create a 
spending request inside the contract. It will then be up to all of the contributors to approve that spending request. If enough people approve the request, 
then the funds automatically get sent to this outside vendor. However, if too many people vote no, then that is an indication that this is a bad request.
So with this type of approach, by using an Ethereum contract, at least these contributors have an idea of where their money is being sent to and they have the ability 
to review these spending requests before the money gets spent.

##Demo :

Landing page 

<img width="944" alt="fundit6" src="https://github.com/SurveAditya/FundIT/assets/100592839/22bfe638-9640-450f-b8bd-2ab1826b7bcb">

Create a new Campaign

<img width="949" alt="fundit7" src="https://github.com/SurveAditya/FundIT/assets/100592839/c37f5a87-49c8-4837-a8ed-1259f8186f2b">

Create a request

<img width="960" alt="fundit5" src="https://github.com/SurveAditya/FundIT/assets/100592839/e8e26a8f-8b4a-444b-80c1-1cc425f83eda">

View Request

<img width="948" alt="fundit2" src="https://github.com/SurveAditya/FundIT/assets/100592839/8a6af197-be06-4021-abd5-df65d11fcf0a">

Contribute to a Campaign:

<img width="950" alt="fundit3" src="https://github.com/SurveAditya/FundIT/assets/100592839/6e3cdf7b-3f6f-43e0-8410-019a1d85fa72">









