document.addEventListener("DOMContentLoaded", function() {
   
    const canvas = document.querySelector("#canvas-target");
    const wrapper = document.querySelector(".positioning");
    
    const svgElements = wrapper.querySelectorAll("img.a-image"); 

    
    let imagesLoaded = 0;
    const totalImages = svgElements.length;

    
    function preloadImages() {
        svgElements.forEach((svg, index) => {
            const image = new Image();
            
            image.onload = function() {
                imagesLoaded++;
                
                if (imagesLoaded === totalImages) {
                    createBodies();
                }
            };
        
            image.src = svg.src;
        });
    }

    function createBodies() {
       
        let Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        
        let engine = Engine.create();

        
        let render = Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                background: "transparent",
                wireframes: false,
                width: window.innerWidth,
                height: window.innerHeight,
            }
        });
        

        
        let bodies = [];
        svgElements.forEach((svg, index) => {
            let body = Bodies.rectangle(index * 100, 200, 100, 100, {
                render: {
                    sprite: {
                        texture: svg.src 
                    }
                }
            });
            bodies.push(body);
        });
        Composite.add(engine.world, bodies);

       
        let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 100, {
            isStatic: true,
            render: {
                fillStyle: 'transparent',
            }
        });
        Composite.add(engine.world, ground);

       
        let leftWall = Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });
        let rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });
        Composite.add(engine.world, [leftWall, rightWall]);

        
        Render.run(render);

       
        let runner = Runner.create();
        Runner.run(runner, engine);

        
        let mouse = Mouse.create(render.canvas);
        let mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        Composite.add(engine.world, mouseConstraint);

        
        svgElements.forEach(svg => {
            svg.addEventListener("mousedown", function(event) {
                event.preventDefault();
                event.stopPropagation();
                const initialX = event.clientX;
                const initialY = event.clientY;

                function moveHandler(moveEvent) {
                    const movementX = moveEvent.clientX - initialX;
                    const movementY = moveEvent.clientY - initialY;
                    Composite.translate(engine.world, bodies, { x: movementX, y: movementY });
                }

                document.addEventListener("mousemove", moveHandler);

                document.addEventListener("mouseup", function() {
                    document.removeEventListener("mousemove", moveHandler);
                }, { once: true });
            });
        });
    }

    
    preloadImages();
});
