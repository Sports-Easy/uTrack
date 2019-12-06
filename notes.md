The main point to the challenge is to see what sorting algorithms I will use on the different data operations (I hope 
that kinda explains it). Picking the right algorithm can go a long way in a business ecspecially if they are using 
services such as: Amazon Web Services or Google Cloud Platform. Operations that take up cpu time can be expensive to 
use.

## Answering Technical Questions

### Please explain what is wrong with this code and what the observed behaviour might be in a component that included it. this.setState({count: this.state.count+1})
Attempting to increment count in state in this way will produce lifecycle issues. The actual value of count will not get
updated until after Reacts reconciliation process. When called the setState function creates a new UI tree with the new 
values stored in the component. calling this multiple times will always get the state of the previous tree and update it.

### Can you please explain how Redux works, assuming your were talking to a non-technical audience.
When developing in React the number of components created and the amount of data moving from one component to another 
can easily become a ball of thread in a view of a large application.
Each of the components have the potential to have their own memory otherwise, known as state. These states remember any 
set values and can change the look of the UI depending on the value. Some components communicate with each other. Moving
the data upwards and downwards through a chain. Following these states and updating them can spiral out of control very
quickly, increasing the complexity of the system just by following certain data points. What Redux is equivelant to is
like the Brain (Redux State), Organs (Components), Central Nervous system (Dispatching Actions). Rather than following
a thread from an organ to the brain. You can use the escape hatch from the organ to the central nervous system and 
communicate an action to the Brain. From there the Brain knows exactly what to do with the action and updates its memory.
Once the state in the brain has updated this makes a cascading effect to all other organs in the body. Updating all 
organs at once.

