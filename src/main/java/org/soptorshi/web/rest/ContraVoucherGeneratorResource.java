package org.soptorshi.web.rest;
import org.soptorshi.domain.ContraVoucherGenerator;
import org.soptorshi.repository.ContraVoucherGeneratorRepository;
import org.soptorshi.repository.search.ContraVoucherGeneratorSearchRepository;
import org.soptorshi.web.rest.errors.BadRequestAlertException;
import org.soptorshi.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing ContraVoucherGenerator.
 */
@RestController
@RequestMapping("/api")
public class ContraVoucherGeneratorResource {

    private final Logger log = LoggerFactory.getLogger(ContraVoucherGeneratorResource.class);

    private static final String ENTITY_NAME = "contraVoucherGenerator";

    private final ContraVoucherGeneratorRepository contraVoucherGeneratorRepository;

    private final ContraVoucherGeneratorSearchRepository contraVoucherGeneratorSearchRepository;

    public ContraVoucherGeneratorResource(ContraVoucherGeneratorRepository contraVoucherGeneratorRepository, ContraVoucherGeneratorSearchRepository contraVoucherGeneratorSearchRepository) {
        this.contraVoucherGeneratorRepository = contraVoucherGeneratorRepository;
        this.contraVoucherGeneratorSearchRepository = contraVoucherGeneratorSearchRepository;
    }

    /**
     * POST  /contra-voucher-generators : Create a new contraVoucherGenerator.
     *
     * @param contraVoucherGenerator the contraVoucherGenerator to create
     * @return the ResponseEntity with status 201 (Created) and with body the new contraVoucherGenerator, or with status 400 (Bad Request) if the contraVoucherGenerator has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/contra-voucher-generators")
    public ResponseEntity<ContraVoucherGenerator> createContraVoucherGenerator(@RequestBody ContraVoucherGenerator contraVoucherGenerator) throws URISyntaxException {
        log.debug("REST request to save ContraVoucherGenerator : {}", contraVoucherGenerator);
        if (contraVoucherGenerator.getId() != null) {
            throw new BadRequestAlertException("A new contraVoucherGenerator cannot already have an ID", ENTITY_NAME, "idexists");
        }
        ContraVoucherGenerator result = contraVoucherGeneratorRepository.save(contraVoucherGenerator);
        contraVoucherGeneratorSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/contra-voucher-generators/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /contra-voucher-generators : Updates an existing contraVoucherGenerator.
     *
     * @param contraVoucherGenerator the contraVoucherGenerator to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated contraVoucherGenerator,
     * or with status 400 (Bad Request) if the contraVoucherGenerator is not valid,
     * or with status 500 (Internal Server Error) if the contraVoucherGenerator couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/contra-voucher-generators")
    public ResponseEntity<ContraVoucherGenerator> updateContraVoucherGenerator(@RequestBody ContraVoucherGenerator contraVoucherGenerator) throws URISyntaxException {
        log.debug("REST request to update ContraVoucherGenerator : {}", contraVoucherGenerator);
        if (contraVoucherGenerator.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        ContraVoucherGenerator result = contraVoucherGeneratorRepository.save(contraVoucherGenerator);
        contraVoucherGeneratorSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, contraVoucherGenerator.getId().toString()))
            .body(result);
    }

    /**
     * GET  /contra-voucher-generators : get all the contraVoucherGenerators.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of contraVoucherGenerators in body
     */
    @GetMapping("/contra-voucher-generators")
    public List<ContraVoucherGenerator> getAllContraVoucherGenerators() {
        log.debug("REST request to get all ContraVoucherGenerators");
        return contraVoucherGeneratorRepository.findAll();
    }

    /**
     * GET  /contra-voucher-generators/:id : get the "id" contraVoucherGenerator.
     *
     * @param id the id of the contraVoucherGenerator to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the contraVoucherGenerator, or with status 404 (Not Found)
     */
    @GetMapping("/contra-voucher-generators/{id}")
    public ResponseEntity<ContraVoucherGenerator> getContraVoucherGenerator(@PathVariable Long id) {
        log.debug("REST request to get ContraVoucherGenerator : {}", id);
        Optional<ContraVoucherGenerator> contraVoucherGenerator = contraVoucherGeneratorRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(contraVoucherGenerator);
    }

    /**
     * DELETE  /contra-voucher-generators/:id : delete the "id" contraVoucherGenerator.
     *
     * @param id the id of the contraVoucherGenerator to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/contra-voucher-generators/{id}")
    public ResponseEntity<Void> deleteContraVoucherGenerator(@PathVariable Long id) {
        log.debug("REST request to delete ContraVoucherGenerator : {}", id);
        contraVoucherGeneratorRepository.deleteById(id);
        contraVoucherGeneratorSearchRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/contra-voucher-generators?query=:query : search for the contraVoucherGenerator corresponding
     * to the query.
     *
     * @param query the query of the contraVoucherGenerator search
     * @return the result of the search
     */
    @GetMapping("/_search/contra-voucher-generators")
    public List<ContraVoucherGenerator> searchContraVoucherGenerators(@RequestParam String query) {
        log.debug("REST request to search ContraVoucherGenerators for query {}", query);
        return StreamSupport
            .stream(contraVoucherGeneratorSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }

}
