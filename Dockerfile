FROM ruby:2.4.1
ENV LANG C.UTF-8
# install essential libraries
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# install node.js
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash - && \
    apt-get install nodejs

# install yarn
RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn
RUN mkdir /app
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install
ADD . /app
WORKDIR /app