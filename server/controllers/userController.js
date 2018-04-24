var planets = []

var id = 1;

module.exports = {
    create: (req, res)=>{
        // console.log(req.body);
        const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, resident, films, created, edited, url} = req.body;
		planets.push({id, name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, resident, films, created, edited, url});
		id++;
		res.status(200).send(planets);
    },
    read: (req, res)=>{
        res.status(200).send(planets);
    },
    delete: (req, res)=>{
        const planetName = req.params.planetName;
        index = -1;
        for(let i = 0; i < planets.length; i++){
            if(planets[i].name === planetName){
                index = i;
            }
        }
        if(index !== -1){
            planets.splice(index, 1);
        }
        
        res.status(200).send(planets);
    }
}