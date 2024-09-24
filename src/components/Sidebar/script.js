function loadComponent(componentId) {
    // Hide all components

    var components = document.querySelectorAll('.component');
    components.forEach(function (component) {
        component.classList.remove('active');
    });

    // Show the selected component
    var activeComponent = document.getElementById(componentId);
    activeComponent.classList.add('active');
    console.log(componentId);
}
