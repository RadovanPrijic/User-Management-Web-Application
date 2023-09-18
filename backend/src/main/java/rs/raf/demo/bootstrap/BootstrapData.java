package rs.raf.demo.bootstrap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import rs.raf.demo.model.*;
import rs.raf.demo.repositories.*;
import java.util.List;

@Component
public class BootstrapData implements CommandLineRunner {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public BootstrapData(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        System.out.println("Loading Data...");

        roleRepository.save(new Role("CAN_READ_USERS"));
        roleRepository.save(new Role("CAN_CREATE_USERS"));
        roleRepository.save(new Role("CAN_UPDATE_USERS"));
        roleRepository.save(new Role("CAN_DELETE_USERS"));

        User user1 = new User();
        user1.setName("Radovan");
        user1.setSurname("Prijic");
        user1.setEmail("radovanprijic@gmail.com");
        user1.setPassword(this.passwordEncoder.encode("radovanprijic"));
        user1.addRole(new Role(1L));
        user1.addRole(new Role(2L));
        user1.addRole(new Role(3L));
        user1.addRole(new Role(4L));
        this.userRepository.save(user1);

        User user2 = new User();
        user2.setName("Marko");
        user2.setSurname("Markovic");
        user2.setEmail("markomarkovic@gmail.com");
        user2.setPassword(this.passwordEncoder.encode("markomarkovic"));
        user2.addRole(new Role(1L));
        user2.addRole(new Role(2L));
        user2.addRole(new Role(3L));
        this.userRepository.save(user2);

        User user3 = new User();
        user3.setName("Petar");
        user3.setSurname("Antic");
        user3.setEmail("petarantic@gmail.com");
        user3.setPassword(this.passwordEncoder.encode("petarantic"));
        user3.addRole(new Role(1L));
        user3.addRole(new Role(3L));
        this.userRepository.save(user3);

        User user4 = new User();
        user4.setName("Anja");
        user4.setSurname("Krstic");
        user4.setEmail("anjakrstic@gmail.com");
        user4.setPassword(this.passwordEncoder.encode("anjakrstic"));
        user4.addRole(new Role(1L));
        user4.addRole(new Role(4L));
        this.userRepository.save(user4);

        User user5 = new User();
        user5.setName("Jovan");
        user5.setSurname("Jovanovic");
        user5.setEmail("jovanjovanovic@gmail.com");
        user5.setPassword(this.passwordEncoder.encode("jovanjovanovic"));
        user5.addRole(new Role(1L));
        user5.addRole(new Role(2L));
        this.userRepository.save(user5);

        User user6 = new User();
        user6.setName("Milica");
        user6.setSurname("Stevanovic");
        user6.setEmail("milicastevanovic@gmail.com");
        user6.setPassword(this.passwordEncoder.encode("milicastevanovic"));
        this.userRepository.save(user6);

        System.out.println("Data loaded!");
    }
}
