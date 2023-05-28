import React from "react";
import { useAuthenticationStatus } from "@nhost/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SelectBox, SelectBoxItem, Text } from "@tremor/react";

function Profile() {
  const { isAuthenticated } = useAuthenticationStatus();
  const [inhaler, setInhaler] = useState("two");
  const [surrounding, setSurrounding] = useState("one");

  const drugsToAvoid = [
    "Aspirin",
    "NSAIDs (Ibuprofen, Naproxen, Diclofenac)",
    "Beta-blockers (Propranolol, Metoprolol)",
    "Ace inhibitors (Lisinopril, Enalapril)",
    "Sulfites",
    "Non-selective beta-agonists (Isoproterenol)",
    "Methacholine",
    "Cromolyn Sodium",
    "MAOIs",
    "Certain antibiotics",
    "Certain antifungal medications",
    "Certain antihistamines",
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {isAuthenticated ? (
        <>
          <h1 className="text-2xl font-semibold">Settings</h1>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How often do you want to be reminded about inhaler?
            </label>
            <SelectBox value={inhaler} onValueChange={setInhaler}>
              <SelectBoxItem value="half" text="Every 30 minutes" />
              <SelectBoxItem value="one" text="Every 1 hour" />
              <SelectBoxItem value="two" text="Every 2 hours" />
              <SelectBoxItem value="five" text="Every 5 hours" />
            </SelectBox>
          </div>

          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How many times a day you want to be reminded about surrounding?
            </label>
            <SelectBox value={surrounding} onValueChange={setSurrounding}>
              <SelectBoxItem value="one" text="Once" />
              <SelectBoxItem value="two" text="Twice" />
              <SelectBoxItem value="three" text="Thrice" />
              <SelectBoxItem value="hour" text="Every hour" />
            </SelectBox>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-semibold">You are not logged in.</h1>

          <p className="mt-2 font-semibold">
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-500 "
            >
              Login now
            </Link>{" "}
            to get customized experience.
          </p>
        </div>
      )}

      <h1 className="text-2xl font-semibold mt-5">Drugs</h1>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          These are the drugs you should avoid:
        </label>

        {/* list the drugs to be avoided in html format */}
        <ul className="list-disc list-inside">
          {drugsToAvoid.map((drug) => (
            <li>{drug}</li>
          ))}
        </ul>

        <Text className="mt-3">
          P.S. This list is not exhaustive. Please consult your doctor for more
          information.
        </Text>
      </div>
    </div>
  );
}

export default Profile;
