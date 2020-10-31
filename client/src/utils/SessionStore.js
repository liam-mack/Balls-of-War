// /* eslint-disable */

// import React, { createContext, useReducer, useContext } from "react";

// const SessionContext = createContext({
//   id: "",
//   status: true,
//   player1: {
//     deck: [],
//     grave: [],
//   },
//   player2: {
//     deck: [],
//     grave: [],
//   },
//   turn: null,
//   play: null,

// });

// const { Provider } = SessionContext;

// function reducer(state, action) {
//   switch (action.type) {
//   default:
//     throw new Error(action.type);
//   }
// }

// function SessionProvider({ value = [], ...props }) {
//   const [state, dispatch] = useReducer(reducer, []);
//   return <Provider value={[state, dispatch]} {...props} />;
// }

// function useSessionContext() {
//   return useContext(SessionContext);
// }

// export { SessionProvider, useSessionContext };
// // function Session() {
// //   const [session, setSession] = useState(
// //     {
// //       id: null,
// //       status,
// //       turn,

// //     }
// //     );
// // }
