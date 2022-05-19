import tw, { css } from "twin.macro"
import { useState } from "react"
import { Switch } from "@headlessui/react"
export default function Toggle({
  label,
  description,
  groupProps,
  labelProps,
  descriptionProps,
  switchProps,
}) {
  return (
    <Switch.Group {...groupProps}>
      <div tw="flex items-center justify-between">
        <SwitchLabel
          label={label}
          description={description}
          labelProps={labelProps}
          descriptionProps={descriptionProps}
        />
        <SwitchKnob switchProps={switchProps} />
      </div>
    </Switch.Group>
  )
}
function SwitchLabel({ label, description, labelProps, descriptionProps }) {
  return (
    <Switch.Label tw="block pr-5 w-full" {...labelProps}>
      {label && <div>{label}</div>}
      {description && (
        <Switch.Description tw="text-green-800" {...descriptionProps}>
          {description}
        </Switch.Description>
      )}
    </Switch.Label>
  )
}
function SwitchKnob({ switchProps }) {
  const [enabled, setEnabled] = useState(false)
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      css={[
        tw`h-[38px] w-[74px]
            relative inline-flex flex-shrink-0
            border-2 border-transparent rounded-full cursor-pointer
            transition-colors ease-in-out duration-200
            focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75)`,
        enabled ? tw`bg-indigo-900` : tw`bg-indigo-700`,
      ]}
      {...switchProps}
    >
      <span
        aria-hidden="true"
        css={[
          tw`h-[34px] w-[34px]
              pointer-events-none inline-block
              rounded-full bg-white shadow-lg transform ring-0
              transition ease-in-out duration-200`,
          enabled ? tw`translate-x-9` : tw`translate-x-0`,
        ]}
      />
    </Switch>
  )
}
