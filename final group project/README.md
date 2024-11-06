# Creative coding major project

We choose Piet Mondrian "Broadway Boogie Woogie". This project is a city block simulation that uses **p5.js** to create a dynamic, interactive canvas featuring moving blocks that simulate cars within a grid of roads, buildings, and pavements. Each small block (car) moves in a randomized direction, creating a bustling city street effect. 

## Interaction Instructions

- **Mouse Click**: Click on the canvas to randomly add a new small block (car) onto a road. Each click places a car on a randomly selected road block with a random starting position.
- **Arrow Keys**: Adjust the speed of the small blocks with the arrow keys:
  - **Up Arrow**: Increases the speed of the cars.
  - **Down Arrow**: Decreases the speed, with a minimum of 0.
- **Window Resize**: On resizing of the window, the canvas automatically resizes to the new size and resets all blocks.


## Individual Approach to Animation

My approach was to use **User Input** that allows the user to control the city’s “traffic flow” by adjusting the speed of the small blocks. The use of **mouse clicks** to add new blocks on random road segments gives users the freedom to “populate” the city as they please, creating unique patterns each time.

## Animation Driver

The animation is driven by user interaction with both the mouse and keyboard. Each interaction has a specific effect:
- **Mouse Clicks** generate new small blocks.
- **Arrow Keys** change the speed of existing blocks.

This combination makes the cityscape responsive to the user’s input, giving it an interactive and customizable feel.

## Animated Properties

The properties of the small blocks that are animated include:
- **Position**: Small blocks move continuously in randomized directions, constrained within the boundaries of their respective road blocks.
- **Speed**: Controlled by the user, allowing for a dynamic pacing change in block movement.

## Animation Inspiration

The inspiration for animating moving blocks to represent cars came from **traffic simulations** and **city visualizations** that use simplified shapes to convey movement in urban settings. These references influenced the choice to randomize directions and constrain movement within predefined road segments, which provides an organized yet lively effect.

## Technical Explanation

The animation is achieved using two classes:
- **`Block` Class**: Defines each static block (road, building, etc.) and renders them on the canvas.
- **`SmallBlock` Class**: Represents the small moving blocks (cars). Each `SmallBlock` object has randomized directions within the constraints of its associated road block, reversing direction upon hitting boundaries.

The **`move`** method within `SmallBlock` continuously updates its position, and the **`keyPressed`** function modifies the movement speed based on user input.

### External Techniques

- The project uses a **constraint function** (`constrain`) for boundary checking, a technique commonly used in p5.js, which I adapted to keep blocks moving within their designated roads.
