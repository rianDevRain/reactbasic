/** @format */


const Pet = ({name, animal, breed}) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, name),
		React.createElement("h2", {}, animal),
		React.createElement("h2", {}, breed),
	]);
};

const App = () => {
	return React.createElement("div", { id: "something-important" }, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, { name: "Juju", animal: "Dog", breed: "Mutt"}),
		React.createElement(Pet, { name: "Kitters", animal: "Cat", breed: "Feline"}),
		React.createElement(Pet, { name: "Trixie", animal: "Dog", breed: "GSP"}),
	]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
