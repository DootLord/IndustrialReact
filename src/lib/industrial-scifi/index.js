// Industrial Sci-Fi CSS Library - Main Export
// Import this file to get the complete library

export { default as ISFComponents } from './components.jsx';

// Re-export common SVG components
export {
  CornerMark,
  CornerMarks,
  Crosshair,
  RegisteredMark,
  DotMatrix,
  WavePattern,
  TriangleIndicator,
  FormGroup,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Toggle,
  Range,
  FileInput,
  FormError,
  FormHelp,
  InputGroup,
  Fieldset,
  SearchInput
} from './components.jsx';

// CSS is imported via index.css

export default {
  version: '1.0.0',
  name: 'Industrial Sci-Fi CSS',
  prefix: 'isf-'
};
