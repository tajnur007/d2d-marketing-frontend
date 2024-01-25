import { MapFlagIcon } from '@/assets/icons';
import usePlacesAutocomplete from 'use-places-autocomplete';

const PlacesAutocomplete = ({
  onAddressSelect,
}: {
  onAddressSelect?: (address: string) => void;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => {
    return data?.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className=' absolute bottom-4 left-4 bg-white h-[65px] w-[392px] rounded-[10px] p-3'>
      <h3 className='text-[14px] font-semibold'>Selected Location</h3>
      <div className='flex items-center gap-2 '>
        <MapFlagIcon />
        <input
          value={value}
          className='text-[#9D9D9D] text-[14px] font-[500] w-full mt-[1px]'
          // disabled={!ready}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Kamal ataturk avenue, banani, Dhaka - 1203'
        />

        {status === 'OK' && <ul className=''>{renderSuggestions()}</ul>}
      </div>
    </div>
  );
};

export default PlacesAutocomplete;
