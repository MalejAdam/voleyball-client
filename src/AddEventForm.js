import React from 'react';
import { InputDate } from './components/InputDate';
import { useForm } from 'react-hook-form';
import { InputWithLabel } from './components/InputWithLabel';
import { addEventMutation } from './graphql/mutations';
import { getEventsQueries } from './graphql/queries';
import { levels, groups } from './constants/level';
import './AddEventForm.scss';
import { from, useMutation } from '@apollo/client';

export const AddEventForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addEvent] = useMutation(addEventMutation, {
    refetchQueries: [{ query: getEventsQueries }],
  });

  const onSubmit = (data) => {
    const event = validEvent(data);

    addEvent({ variables: { input: event } });
    reset();
  };

  return (
    <>
      <div className="col">
        <div className="row">
          <div className="col-1"></div>
          <div className="col" style={{ paddingLeft: '0' }}>
            <h3>Utwórz wydarzenie</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <InputWithLabel
                  ref={register}
                  inputName="address"
                  textLabel="Adres"
                  placeholder="Sosnowa 17"
                  isRequired={true}
                />
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <InputDate inputName="date" ref={register} />
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col label-col">
                      <label>Godzina: </label>
                    </div>
                    <div className="col-8">
                      <input name="time" type="time" ref={register} required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-4 label-col">
                      <label>Poziom gry: </label>
                    </div>
                    <div className="col">
                      <select name="level" ref={register}>
                        {levels.map((level, index) => {
                          return (
                            <option key={level} value={index}>
                              {level}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-6 col-md-7 label-col">
                      <label>Ile potrzebujesz osób?: </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        ref={register}
                        name="numberOfPerson"
                        min="1"
                        max="11"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-5 label-col">
                      <label>Koszt na osobę: </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        ref={register}
                        name="costPerPerson"
                        min="0"
                        max="50"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-4 label-col">
                      <label>Czas trwania: </label>
                    </div>
                    <div className="col">
                      <input
                        name="duration"
                        type="time"
                        ref={register}
                        min="00:00"
                        max="05:00"
                        defaultValue="02:00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <div className="col col-md-6">
                  <div className="row">
                    <div className="col-4 col-md-4 label-col">
                      <label>Grupa: </label>
                    </div>
                    <div className="col">
                      <select name="group" ref={register}>
                        {groups.map((group, index) => {
                          return (
                            <option key={group} value={index}>
                              {group}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <InputWithLabel
                  ref={register}
                  inputName="additionalComment"
                  textLabel="Informacje"
                  placeholder="Wejście znajduje się od strony..."
                />
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row submit-row">
            <div className="col-4">
              <input type="submit" value="Utwórz"></input>
            </div>
            <div className="col-1"></div>
          </div>
        </form>
      </div>
    </>
  );
};

const validEvent = (data) => {
  return {
    address: data.address,
    date: data.date,
    time: data.time,
    level: parseInt(data.level),
    numberOfPerson: parseInt(data.numberOfPerson),
    costPerPerson: parseInt(data.costPerPerson),
    duration: data.duration,
    additionalComment: data.additionalComment,
    group: parseInt(data.group),
  };
};
