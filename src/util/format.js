function formatPokemonBasicInfo(data) {
  if (Object.keys(data).length > 0) {
    const generation = data.generation.name;
    return {
      base_happiness: data.base_happiness,
      capture_rate: data.capture_rate,
      color: data.color.name,
      generation: generation.split('-')[1].toUpperCase(),
      habitat: data.habitat ? data.habitat.name : 'unknown',
      name: data.name,
    };
  }
  return {};
}

function formatPokemonDetails(data) {
  if (Object.keys(data).length > 0) {
    return {
      base_experience: data.base_experience,
      height: data.height,
      id: data.id,
      species_name: data.species.name,
      weight: data.weight,
      generations: data.hasOwnProperty('game_indices')
        ? data.game_indices.map(e => e.version.name)
        : 'none',
      forms: data.forms.map(e => e.name),
      stats: Object.assign(
        {},
        ...data.stats.map(e => ({
          [e.stat.name]: {base_stat: e.base_stat, effort: e.effort},
        })),
      ),
      types: data.types.map(e => e.type.name),
    };
  }
  return {
    base_experience: 'unknown???',
    height: 'unknown???',
    id: null,
    species_name: 'unknown???',
    weight: 'unknown???',
    generations: 'NA',
    forms: ['unknown???'],
    stats: {},
    types: ['unknown???'],
  };
}

export {formatPokemonBasicInfo, formatPokemonDetails};
