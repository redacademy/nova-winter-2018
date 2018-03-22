// Actions
const PROFILE_BIO = "PROFILE_BIO";
const PROFILE_EXPERIENCE = "PROFILE_EXPERIENCE";
const PROFILE_EDUCATION = "PROFILE_EDUCATION";
const PROFILE_GLOBAL = "PROFILE_GLOBAL";
const PROFILE_NAME = "PROFILE_NAME";
const PROFILE_PROJECTS = "PROFILE_PROJECTS";
const PROFILE_QUOTE = "PROFILE_QUOTE";
const PROFILE_REFERENCES = "PROFILE_REFERENCES";
const PROFILE_IMAGE = "PROFILE_IMAGES";
const PROFILE_TITLE = "PROFILE_TITLE";
const USER_LOADING = "USER_LOADING";

// Action Creator
export const setProfileBio = profileInfo => ({
  type: PROFILE_BIO,
  payload: profileInfo
});
export const setProfileExperience = profileInfo => ({
  type: PROFILE_EXPERIENCE,
  payload: profileInfo
});
export const setProfileEducation = profileInfo => ({
  type: PROFILE_EDUCATION,
  payload: profileInfo
});
export const setProfileGlobal = profileInfo => ({
  type: PROFILE_GLOBAL,
  payload: profileInfo
});
export const setProfileName = profileInfo => ({
  type: PROFILE_NAME,
  payload: profileInfo
});
export const setProfileProjects = profileInfo => ({
  type: PROFILE_PROJECTS,
  payload: profileInfo
});
export const setProfileQuote = profileInfo => ({
  type: PROFILE_QUOTE,
  payload: profileInfo
});
export const setProfileReferences = profileInfo => ({
  type: PROFILE_REFERENCES,
  payload: profileInfo
});
export const setProfileImage = profileInfo => ({
  type: PROFILE_IMAGE,
  payload: profileInfo
});
export const setProfileTitle = profileInfo => ({
  type: PROFILE_TITLE,
  payload: profileInfo
});
export const userLoading = () => ({
  type: USER_LOADING
});

export default function(
  state = {
    bio: "",
    experience: "",
    education: "",
    global: "",
    name: "",
    projects: "",
    quote: "",
    references: "",
    image: "",
    title: "",
    userLoading: true
  },
  action
) {
  switch (action.type) {
    case PROFILE_BIO: {
      return {
        ...state,
        bio: action.payload
      };
    }
    case PROFILE_EXPERIENCE: {
      return {
        ...state,
        experience: action.payload
      };
    }
    case PROFILE_EDUCATION: {
      return {
        ...state,
        education: action.payload
      };
    }
    case PROFILE_GLOBAL: {
      return {
        ...state,
        global: action.payload
      };
    }
    case PROFILE_NAME: {
      return {
        ...state,
        name: action.payload
      };
    }
    case PROFILE_PROJECTS: {
      return {
        ...state,
        projects: action.payload
      };
    }
    case PROFILE_QUOTE: {
      return {
        ...state,
        quote: action.payload
      };
    }
    case PROFILE_REFERENCES: {
      return {
        ...state,
        references: action.payload
      };
    }
    case PROFILE_IMAGE: {
      return {
        ...state,
        image: action.payload
      };
    }
    case PROFILE_TITLE: {
      return {
        ...state,
        title: action.payload
      };
    }
    case USER_LOADING: {
      return {
        ...state,
        userLoading: false
      };
    }
    default:
      return state;
  }
}
