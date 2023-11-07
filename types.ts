// types.ts

export interface Flight {
    callsign: string;
    aircraftRegistration: string;
    aircraftModeS: string;
    aircraftType: string;
    aircraftClasses: string[];
    aircraftTypeDescription: string;
    altitude: number;
    latitude: number | null;
    longitude: number | null;
    source: string;
    created: string;
    updated: string;
    positions: Position[];
  }
  
  export interface Position {
    groundSpeed: number;
    heading: number;
    altitude: number;
    verticalRate: number;
    latitude: number | null;
    longitude: number | null;
    squawkCode: number | null;
    source: string;
    timestamp: string;
  }
  
  export interface FlightData {
    flights: Flight[];
  }
  