import metaversefile from 'metaversefile';

const baseUrl = import.meta.env.VITE_CORE_MODULES_URL ?? import.meta.env.NEXT_CORE_MODULES_URL ?? `https://ixc4m-uiaaa-aaaam-qa5sa-cai.ic0.app/core-modules/`;

// Shaw > I added "index.js" to the end of the couple of these imports to avoid the MIME type confusion upon loading the module from the weird way that the canister serves it.


const moduleUrls = {
  button: `${baseUrl}button/index.js`,
  silk: `${baseUrl}silk/`,
  card: `${baseUrl}card/`,
  arrowLoader: `${baseUrl}arrow-loader/`,
  errorPlaceholder: `${baseUrl}error-placeholder/`,
  damageMesh: `${baseUrl}damage-mesh/`,
  nameplate: `${baseUrl}nameplate/`,
  ki: `${baseUrl}ki/`,
  sonicBoom: `${baseUrl}sonic-boom/`,
  healEffect: `${baseUrl}heal-effect/`,
  filter: `${baseUrl}filter/`,
  barrier: `${baseUrl}barrier/`,
  comet: `${baseUrl}comet/`,
  spawner: `${baseUrl}spawner/`,
  defaultScene: `${baseUrl}default-scene/`,
  path: `path/`,
  area: `${baseUrl}area/`,
  cameraPlaceholder: `${baseUrl}camera-placeholder/`,
  targetReticle: `${baseUrl}target-reticle/`,
  halo: `${baseUrl}halo/`,
  silks: `${baseUrl}silks/`,
  magic: `${baseUrl}magic/`,
  limit: `${baseUrl}limit/`,
  flare: `${baseUrl}flare/`,
  firedrop: `${baseUrl}firedrop/`,
  meshLodItem: `${baseUrl}mesh-lod-item/`,
  transformIndicators: `${baseUrl}transform-indicators/index.js`,
  glider: `${baseUrl}glider/`,
  phoneEditTool: `${baseUrl}phone-edit-tool/`,
};
const importModule = async moduleName => {
  const moduleUrl = moduleUrls[moduleName];
  const m = await metaversefile.import(moduleUrl);
  return m;
};
export {
  moduleUrls,
  importModule,
};